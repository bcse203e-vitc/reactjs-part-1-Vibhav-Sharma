function Welcome() {
 const isLoggedIn = false;
return (
 <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
);
}
export default Welcome;
