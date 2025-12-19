import React, { useEffect, useState } from 'react';
import { supabase } from './Supabase';

const TestAPI = () => {
    const [homeContent, setHomeContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function callGetAPI() {
            // Try without special character first
            let res = await supabase.from("home_about_category_content").select("*").eq("section", "home");
            console.log("TestAPI - Response:", res);
            console.log("TestAPI - Data:", res.data);
            console.log("TestAPI - Error:", res.error);
            
            // If that fails, try with special character
            if (res.error) {
                console.log("TestAPI - Trying with special character...");
                res = await supabase.from("homeـ_about_category_content").select("*").eq("section", "home");
                console.log("TestAPI - Response (with special char):", res);
            }
            
            if (res.data) {
                console.log("TestAPI - Number of items:", res.data.length);
                console.log("TestAPI - All keys:", res.data.map(item => item.key));
                res.data.forEach((item, index) => {
                    console.log(`TestAPI - Item ${index}:`, {
                        key: item.key,
                        section: item.section,
                        has_content_en: !!item.content_en,
                        content_preview: item.content_en ? item.content_en.substring(0, 50) + '...' : 'EMPTY'
                    });
                });
                setHomeContent(res.data);
            }
            setLoading(false);
        }
        callGetAPI();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Test API - Home Content</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p><strong>Total items:</strong> {homeContent.length}</p>
                    <p><strong>All keys:</strong> {homeContent.map(item => item.key).join(', ') || 'None'}</p>
                    
                    <div style={{ marginTop: '20px' }}>
                        <h2>Data Details:</h2>
                        {homeContent.length > 0 ? (
                            homeContent.map((item, index) => (
                                <div key={index} style={{ 
                                    marginBottom: '20px', 
                                    padding: '15px', 
                                    border: '1px solid #ddd', 
                                    borderRadius: '5px',
                                    backgroundColor: '#f9f9f9'
                                }}>
                                    <h3>Item {index + 1}</h3>
                                    <p><strong>Key:</strong> <code style={{backgroundColor: '#e0e0e0', padding: '2px 5px'}}>{item.key}</code></p>
                                    <p><strong>Section:</strong> {item.section}</p>
                                    <p><strong>Has content_en:</strong> {item.content_en ? '✅ YES' : '❌ NO'}</p>
                                    {item.content_en && (
                                        <div style={{ marginTop: '10px' }}>
                                            <p><strong>Content:</strong></p>
                                            <div style={{ 
                                                padding: '10px', 
                                                backgroundColor: 'white', 
                                                border: '1px solid #ccc',
                                                maxHeight: '200px',
                                                overflow: 'auto'
                                            }}>
                                                {item.content_en}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p style={{ color: 'red' }}>No data found!</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default TestAPI;
