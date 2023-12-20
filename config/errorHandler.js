
const handleDatabaseError = (res, error) => {
    console.error('Error querying the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
};

export { handleDatabaseError };

