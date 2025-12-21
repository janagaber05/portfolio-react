import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import './Stack.css';

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 320, height: 400 },
  cards = [],
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false
}) {
  const [isPaused, setIsPaused] = useState(false);

  const [stack, setStack] = useState(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content, isCustom: true }));
    }
    if (cardsData.length) {
      return cardsData.map((card, index) => ({ 
        id: card.id || index + 1, 
        type: card.type || 'dark',
        title: card.title,
        description: card.description,
        isCustom: false 
      }));
    }
    return [];
  });

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content, isCustom: true })));
    } else if (cardsData.length) {
      setStack(cardsData.map((card, index) => ({ 
        id: card.id || index + 1, 
        type: card.type || 'dark',
        title: card.title,
        description: card.description,
        isCustom: false 
      })));
    }
  }, [cards, cardsData]);

  const sendToBack = id => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  if (stack.length === 0) return null;

  return (
    <div
      className="stack-container"
      style={{ width: cardDimensions.width, height: cardDimensions.height }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        const cardType = card.type === 'pink' || card.type === 'purple' ? 'purple' : 'dark';

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className={`stack-card stack-card--${cardType}`}
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              {card.isCustom ? (
                card.content
              ) : (
                <div className="stack-card__content">
                  <h4 className="stack-card__title">{card.title}</h4>
                  <p className="stack-card__text">{card.description}</p>
                </div>
              )}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
