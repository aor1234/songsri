window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('send').addEventListener('click', function() {

        var msg = document.getElementById('uname').value,
            var msg1 = document.getElementById('fdate').value,
                var msg2 = document.getElementById('ldate').value



        liff.sendMessages([{

            Type: 'text',
            text: msg,
            text: msg1,
            text: msg2



        }]).then(function() {
            window.alert("Message sent");
        }).catch(function(error) {
            window.alert("Error sending message:" + error);
        });
    });
}