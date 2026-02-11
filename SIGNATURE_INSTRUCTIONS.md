# Signature Setup Instructions

## To add your signature to the portfolio:

1. **Save your signature image** as `signature.png` in the `public` folder
   - The signature should be on a transparent background (PNG format)
   - Recommended size: 400x200 pixels or similar aspect ratio
   - The signature will be displayed in WHITE color on your photo

2. **Alternative**: If you want to keep the original blue ink color:
   - Remove the `style={{ filter: 'brightness(0) invert(1)' }}` line from Hero.tsx
   - This will show your signature in its original colors

3. **Adjust position/size** if needed:
   - Position: Change `bottom-6 left-6` in the className
   - Size: Change `width={200} height={100}` values

## Current signature image location:
`e:\OneDrive\Desktop\SOB Portfolio\public\signature.png`

The signature from your second screenshot needs to be:
1. Cropped to remove the gray background
2. Saved as PNG with transparent background
3. Placed in the public folder

You can use any image editor (Photoshop, GIMP, remove.bg, etc.) to:
- Remove the background
- Save as PNG
- Name it "signature.png"
