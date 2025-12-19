# 📸 How to Add Images to Supabase

This guide shows you how to upload and manage images in Supabase Storage.

---

## 🎯 Method 1: Upload Images via Supabase Dashboard (Easiest)

### Step 1: Go to Storage
1. Open your Supabase project dashboard
2. Click **"Storage"** in the left sidebar
3. You'll see a list of storage buckets

### Step 2: Create a Bucket (if you don't have one)
1. Click **"New bucket"** button
2. Enter a bucket name (e.g., `images`, `project-images`, `blog-images`)
3. Choose visibility:
   - **Public**: Anyone can access images (use for public website images)
   - **Private**: Requires authentication (use for user uploads)
4. Click **"Create bucket"**

### Step 3: Upload Images
1. Click on your bucket name
2. Click **"Upload file"** button
3. Select one or multiple images from your computer
4. Wait for upload to complete
5. Your images are now stored!

### Step 4: Get Image URL
1. Click on an uploaded image
2. Copy the **Public URL** (looks like: `https://[project-id].supabase.co/storage/v1/object/public/[bucket-name]/[image-name].jpg`)
3. Use this URL in your React app

---

## 🎯 Method 2: Upload Images via Code (Programmatic)

### Step 1: Set Up Supabase Client
Make sure you have your Supabase client configured (you already have this in `src/pages/Supabase.jsx`):

```javascript
import { supabase } from './Supabase';
```

### Step 2: Upload Image Function
Create a function to upload images:

```javascript
async function uploadImage(file, bucketName = 'images', folder = '') {
  try {
    // Create file path (optional: add folder structure)
    const filePath = folder ? `${folder}/${file.name}` : file.name;
    
    // Upload file
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false // Set to true if you want to overwrite existing files
      });

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}
```

### Step 3: Use in a Form Component
Example: Upload image from a file input:

```javascript
import React, { useState } from 'react';
import { supabase } from './Supabase';

function ImageUploadForm() {
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    
    // Upload to Supabase
    const url = await uploadImage(file, 'images', 'projects');
    
    if (url) {
      setImageUrl(url);
      console.log('Image uploaded:', url);
    }
    
    setUploading(false);
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
      {imageUrl && (
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />
      )}
    </div>
  );
}
```

---

## 🎯 Method 3: Upload via Postman (For Testing)

### Step 1: Get Your Storage Endpoint
Your storage endpoint is:
```
https://[your-project-id].supabase.co/storage/v1/object/[bucket-name]/[file-path]
```

### Step 2: Set Up Postman Request
1. **Method**: `POST`
2. **URL**: 
   ```
   https://[your-project-id].supabase.co/storage/v1/object/[bucket-name]/[file-name].jpg
   ```
   Example:
   ```
   https://kkvepvlkgppzwapbbynh.supabase.co/storage/v1/object/images/project1.jpg
   ```

3. **Headers**:
   ```
   apikey: YOUR_SUPABASE_ANON_KEY
   Authorization: Bearer YOUR_SUPABASE_ANON_KEY
   Content-Type: image/jpeg
   ```

4. **Body**:
   - Select **"binary"**
   - Click **"Select File"** and choose your image

5. Click **"Send"**

---

## 📋 Common Use Cases

### Use Case 1: Store Project Images
```javascript
// Upload project image
const projectImageUrl = await uploadImage(
  projectFile, 
  'images', 
  'projects'
);

// Save URL to your projects table
await supabase
  .from('projects')
  .update({ image_url: projectImageUrl })
  .eq('id', projectId);
```

### Use Case 2: Store Blog Post Images
```javascript
// Upload blog image
const blogImageUrl = await uploadImage(
  blogFile, 
  'images', 
  'blogs'
);

// Save URL to your blog_posts table
await supabase
  .from('blog_posts')
  .update({ image_url: blogImageUrl })
  .eq('id', postId);
```

### Use Case 3: Delete Image
```javascript
async function deleteImage(bucketName, filePath) {
  const { error } = await supabase.storage
    .from(bucketName)
    .remove([filePath]);
  
  if (error) {
    console.error('Error deleting image:', error);
  }
}

// Usage
await deleteImage('images', 'projects/project1.jpg');
```

---

## 🔒 Storage Policies (Important!)

### Make Bucket Public
1. Go to **Storage** → Your bucket
2. Click **"Policies"** tab
3. Click **"New Policy"**
4. Choose **"For full customization"**
5. Add this policy:

```sql
-- Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'your-bucket-name');
```

### Allow Uploads (Authenticated Users)
```sql
-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'your-bucket-name');
```

---

## 📝 Quick Reference

### Get Public URL (After Upload)
```javascript
const { data } = supabase.storage
  .from('images')
  .getPublicUrl('projects/project1.jpg');

console.log(data.publicUrl);
// https://[project-id].supabase.co/storage/v1/object/public/images/projects/project1.jpg
```

### List All Files in Bucket
```javascript
const { data, error } = await supabase.storage
  .from('images')
  .list('projects');

console.log(data); // Array of file objects
```

### Download Image
```javascript
const { data, error } = await supabase.storage
  .from('images')
  .download('projects/project1.jpg');

// data is a Blob, you can create an object URL
const url = URL.createObjectURL(data);
```

---

## ✅ Best Practices

1. **Organize with Folders**: Use folder structure like `projects/`, `blogs/`, `avatars/`
2. **Use Descriptive Names**: Name files clearly (e.g., `project-homepage-2024.jpg`)
3. **Optimize Images**: Compress images before uploading to save storage
4. **Set Cache Control**: Use `cacheControl: '3600'` for better performance
5. **Handle Errors**: Always check for errors in upload functions
6. **Public vs Private**: Use public buckets for website images, private for user uploads

---

## 🐛 Troubleshooting

### Error: "Bucket not found"
- Make sure the bucket name is correct
- Check if the bucket exists in your Supabase dashboard

### Error: "new row violates row-level security policy"
- Go to Storage → Policies
- Add a policy to allow public access or authenticated uploads

### Error: "File size too large"
- Supabase free tier has limits
- Compress your images or upgrade your plan

### Images not showing
- Check if bucket is set to "Public"
- Verify the URL is correct
- Check browser console for CORS errors

---

## 📚 Next Steps

1. Create a bucket in Supabase dashboard
2. Upload a test image
3. Copy the public URL
4. Use the URL in your React components
5. Set up upload functionality if needed

Need help with a specific part? Let me know!

