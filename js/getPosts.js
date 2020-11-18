function getLatestPost() {
    return new Promise(function (resolve, reject) {
        $.get("https://dev.indienilegames.tk/api/post/latest", function (data, status) {
            if (status === "success") {
                if (data.status === 0) {
                    resolve(data.response.post);
                } else {
                    reject(new Error(`Recived Error from Server (${data.response.title})`));
                };
            } else {
                reject(new Error("Could not connect to Server"));
            }
        });
    });
};