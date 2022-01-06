function Home({ user }) {
    console.log(user);
    if (user) {
        return <h1> Welcome, {user.first_name}!</h1>;
        } else {
            return <h1>Please Login or Sign Up</h1>;
        }
}
export default Home