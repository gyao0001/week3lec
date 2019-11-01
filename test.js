var createClient = function (name) {
    var age;
    var name;
    return {
        setName: function (newName) {
            name = newName;
        },
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
        setAge: function (newAge) {
            if (newAge > 0 && newAge < 100) {
                age = newAge;
            }
        }
    }
}
var client = createClient('Tom');
console.log(client.getName()); 
client.setName('John');
client.setAge(50);
console.log(client.getAge()); 
console.log(client.getName());