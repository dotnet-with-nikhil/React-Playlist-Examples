export default function withAuth(Component) {

    return function AuthenticatedComponent(props) {

        const isLoggeedIn = true;

        if(!isLoggeedIn) {
            return <h2>Access Denied</h2>
        }

        return <Component {...props} />;

    }

}
