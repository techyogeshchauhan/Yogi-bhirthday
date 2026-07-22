#!/usr/bin/env python3
"""Fix syntax errors in TypeScript/React files"""

import os
import re

def fix_video_messages(filepath):
    """Fix VideoMessages.tsx syntax errors"""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Fix the openInFullscreen function
    pattern = r'const openInFullscreen = \(videoUrl: string\) => {[^}]+overlay\.style\.cssText = `\\n      position: fixed;\\n      inset: 0;\\n      background: rgba\\(0, 0, 0, 0.9\\);\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      z-index: 9999;\\n      padding: 2rem;\\n    `;[^}]*}'
    
    replacement = '''  const openInFullscreen = (videoUrl: string) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.controls = true;
    video.autoplay = true;
    
    const overlay = document.createElement("div");
    const style = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 2rem;
    `;
    overlay.style.cssText = style;
    
    overlay.appendChild(video);
    document.body.appendChild(overlay);
    
    const close = () => {
      overlay.remove();
      video.pause();
    };
    
    overlay.onclick = close;
    video.onended = close;
  }'''
    
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Fix the syntax error with file
    content = content.replace('new File([blob], `video-', 'new File([blob], `video-')
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed {filepath}")

def fix_virtual_gift_box(filepath):
    """Fix VirtualGiftBox.tsx syntax errors"""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Fix the property name
    content = content.replace('name": "Restaurant Dinner"', 'name: "Restaurant Dinner"')
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    print(f"✓ Fixed {filepath}")

def main():
    base_dir = "D:/Yogi-bhirthday/src/components/responsive"
    
    video_messages_path = os.path.join(base_dir, "VideoMessages.tsx")
    virtual_gift_box_path = os.path.join(base_dir, "VirtualGiftBox.tsx")
    
    if os.path.exists(video_messages_path):
        fix_video_messages(video_messages_path)
    else:
        print(f"✗ File not found: {video_messages_path}")
    
    if os.path.exists(virtual_gift_box_path):
        fix_virtual_gift_box(virtual_gift_box_path)
    else:
        print(f"✗ File not found: {virtual_gift_box_path}")

if __name__ == "__main__":
    main()