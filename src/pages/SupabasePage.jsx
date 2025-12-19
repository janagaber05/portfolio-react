import React, { useEffect, useState } from 'react';
import { supabase } from './Supabase';

const SupabasePage = () => {
  const [homeData, setHomeData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllData() {
      // Try without special character first
      let res = await supabase.from("home_about_category_content").select("*").eq("section", "home");
      console.log("SupabasePage - Home data:", res);
      if (res.data) {
        setHomeData(res.data);
      }
      
      // If that fails, try with special character
      if (res.error) {
        res = await supabase.from("homeـ_about_category_content").select("*").eq("section", "home");
        console.log("SupabasePage - Home data (with special char):", res);
        if (res.data) {
          setHomeData(res.data);
        }
      }

      // Get about data
      let aboutRes = await supabase.from("home_about_category_content").select("*").eq("section", "about");
      if (aboutRes.error) {
        aboutRes = await supabase.from("homeـ_about_category_content").select("*").eq("section", "about");
      }
      if (aboutRes.data) {
        setAboutData(aboutRes.data);
      }

      // Get category data
      let categoryRes = await supabase.from("home_about_category_content").select("*").eq("section", "category");
      if (categoryRes.error) {
        categoryRes = await supabase.from("homeـ_about_category_content").select("*").eq("section", "category");
      }
      if (categoryRes.data) {
        setCategoryData(categoryRes.data);
      }

      setLoading(false);
    }
    
    getAllData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Supabase Data Checker</h1>
      <p>Supabase URL: https://kkvepvlkgppzwapbbynh.supabase.co</p>
      <p>Status: {loading ? 'Loading...' : 'Connected ✓'}</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>HOME Section Data ({homeData.length} rows)</h2>
        {homeData.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#333', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Key</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Section</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Has content_en</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Content Preview</th>
              </tr>
            </thead>
            <tbody>
              {homeData.map((item, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>{item.key}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.section}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.content_en ? '✅ YES' : '❌ NO'}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd', maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.content_en ? item.content_en.substring(0, 100) + '...' : 'Empty'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: 'red' }}>No data found for HOME section</p>
        )}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>ABOUT Section Data ({aboutData.length} rows)</h2>
        {aboutData.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#333', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Key</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Section</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Has content_en</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Content Preview</th>
              </tr>
            </thead>
            <tbody>
              {aboutData.map((item, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>{item.key}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.section}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.content_en ? '✅ YES' : '❌ NO'}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd', maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.content_en ? item.content_en.substring(0, 100) + '...' : 'Empty'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: 'red' }}>No data found for ABOUT section</p>
        )}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>CATEGORY Section Data ({categoryData.length} rows)</h2>
        {categoryData.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#333', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Key</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Section</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Has content_en</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Content Preview</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((item, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>{item.key}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.section}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.content_en ? '✅ YES' : '❌ NO'}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd', maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.content_en ? item.content_en.substring(0, 100) + '...' : 'Empty'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: 'red' }}>No data found for CATEGORY section</p>
        )}
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>📋 Summary of Keys</h3>
        <p><strong>HOME keys:</strong> {homeData.map(d => d.key).join(', ') || 'None'}</p>
        <p><strong>ABOUT keys:</strong> {aboutData.map(d => d.key).join(', ') || 'None'}</p>
        <p><strong>CATEGORY keys:</strong> {categoryData.map(d => d.key).join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default SupabasePage;



