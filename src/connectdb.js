const username = formValue.username
const password = formValue.password



var url = "mongodb://"+{username}+":"+{password}+"@localhost:27017/ais_mlm?authSource=admin";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("employee");
    var query = { emp_id: "emp101" };
    dbo.collection("emp_data").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    });
});