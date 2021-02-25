export const accAdd = (fullname,email,password) => ({
    type : 'Add',
    user : {
        email : email,
        fullname : fullname,
        password : password,
    }
})
