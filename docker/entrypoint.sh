if [ $(echo "$REACT_APP_ENVIRONMENT")=="develop" ]
then
    npm run dev
else
    npm run build
    npm run start
fi

echo "`date`: 🤖 All ready boss!"