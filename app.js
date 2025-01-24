var liffId = '2006815379-2K8r9RYA';
liff.init({
    liffId: liffId, // Use own liffId
})
.then(() => {
    // start to use LIFF's api
    var islogin = liff.isLoggedIn();
    console.log('islogin', islogin);
    if (islogin) {
        liff.getProfile()
        .then(profile => {
            console.log('profile', profile)
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
})
.catch((err) => {
    console.log(err);
});

const login = () => {
    liff.login({redirectUri: "https://2da0-118-167-72-67.ngrok-free.app"});
}

const share = () => {
    // 判斷是否有登入
    if (!liff.isLoggedIn()) {
        liff.login();
        return;
    }
    else {
        liff.shareTargetPicker(
            [
                // Message Objects: 放入要傳送的訊息
                {
                    "type": "sticker",
                    "packageId": "6136",
                    "stickerId": "10551378"
                },
                {
                    "type": "flex",
                    "altText": "this is a flex message",
                    "contents": {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "hello"
                                },
                                {
                                    "type": "text",
                                    "text": "world"
                                }
                            ]
                        }
                    }
                }
            ],
            {
                isMultiple: true,
            }
        )
        .then(function (res) {
            console.log(`[${res.status}] Message sent!`)
        }).catch(function (error) {
                // something went wrong before sending a message
                console.log(error);
                console.log('something wrong happen')
        })
    }
}

document.getElementById('login').addEventListener('click', login);
document.getElementById('share').addEventListener('click', share);