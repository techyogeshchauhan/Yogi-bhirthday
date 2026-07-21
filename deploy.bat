@echo off
echo ====================================
echo   Birthday Countdown - Vercel Deploy
echo ====================================
echo.

echo [1/4] Checking Git status...
git status
echo.

echo [2/4] Adding all changes...
git add .
echo.

echo [3/4] Creating commit...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update deployment

git commit -m "%commit_msg%"
echo.

echo [4/4] Pushing to GitHub...
git push origin main
echo.

echo ====================================
echo   Deployment Complete!
echo ====================================
echo.
echo Your changes have been pushed to GitHub.
echo Vercel will automatically deploy your changes.
echo.
echo Check deployment status at: https://vercel.com/dashboard
echo.
pause
