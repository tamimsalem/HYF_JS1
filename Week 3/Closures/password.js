function getPasswordField() {
    let passwordValue = '123';

    return  {
        setPassword: function(value) {
            if(value.length >= 8) {
                passwordValue = value;
            }
        },
        isPasswordCorrect: function(passwordToTry) {
            return passwordToTry === passwordValue;
        }
    }
}

let myPasswordField = getPasswordField();

myPasswordField.setPassword('abc123');
myPasswordField.setPassword('abc124');
myPasswordField.setPassword('abc125');
myPasswordField.setPassword('abc126');
myPasswordField.setPassword('abc12389');

console.log(myPasswordField.isPasswordCorrect('abc123'));
console.log(myPasswordField.isPasswordCorrect('abc124'));
console.log(myPasswordField.isPasswordCorrect('abc125'));
console.log(myPasswordField.isPasswordCorrect('abc126'));
console.log(myPasswordField.isPasswordCorrect('abc12389'));