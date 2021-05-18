const getIsAuthenticated = state => state.auth.isLoading;

const getUserName = state => state.auth.user.name;

const authSelectors = {
    getIsAuthenticated,
    getUserName,
}

export default authSelectors;