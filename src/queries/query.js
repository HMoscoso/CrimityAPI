export const queries =  {

    // tblUsers

    getAllUsers: 'SELECT * FROM Users',
    addNewUsers: 'INSERT INTO Users (fullName, email, phoneNum, password, avatar) VALUES (@fullName, @email, @phoneNum, @password, @avatar)',
    getUserId: 'SELECT * FROM Users WHERE userId = @userId',
    getUserMail: 'SELECT * FROM Users WHERE email = @email and password = @password',
    deleteUser: 'DELETE FROM Users WHERE userId = @userId',
    getCountTotalUsers: 'SELECT COUNT(*) FROM Users',
    updateUsers: 'UPDATE Users SET fullName = @fullName, email = @email, phoneNum = @phoneNum, password = @password, avatar = @avatar WHERE userId = @userId',

    // tblPosts

    getAllPosts: 'SELECT * FROM Posts',
    addNewPosts: 'INSERT INTO Posts (fullName, email, avatar, description, distritoId) VALUES (@fullName, @email, @avatar, @description, @distritoId)',
    getPostId: 'SELECT * FROM Posts WHERE postId = @postId',
    deletePost: 'DELETE FROM Posts WHERE postId = @postId',
    getCountTotalPosts: 'SELECT COUNT(*) FROM Posts',
    updatePosts: 'UPDATE Posts SET fullName = @fullName, email = @email, avatar = @avatar, description = @description WHERE postId = @postId',

    // tblCrimes

    getAllCrimes: 'SELECT * FROM Crimes',
    addNewCrimes: 'INSERT INTO Crimes (latitude, longitude, ndelito, descripcion) VALUES (@latitude, @longitude, @ndelito, @descripcion)',
    getCrimeId: 'SELECT * FROM Crimes WHERE crimeId = @crimeId',
    deleteCrime: 'DELETE FROM Crimes WHERE crimeId = @crimeId',
    getCountTotalCrimes: 'SELECT COUNT(*) FROM Crimes',
    updateCrimes: 'UPDATE Crimes SET latitude = @latitude, longitude = @longitude, ndelito = @ndelito, descripcion = @descripcion WHERE crimeId = @crimeId',
}