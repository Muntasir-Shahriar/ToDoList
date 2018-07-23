 var fs = require('fs');

    var data = []
    var url = "test1.json";
    //var arr = JSON.parse(url);

   
    var obj = {
        Name: "1204072",
        Skill: "Muntasir",
        Country: {
            My: "Dinajpur",
            Her: "Barishal"
        }
    }
    
    data.push(obj)
    
    fs.writeFile ("test.JSON", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
