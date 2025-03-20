export const login = (req, res) => {
    const data = req.body;

    try {
        if (!data.email || !data.password) {
            res.status(400).send({ message: "Data not found" });
        } else {
            return res.status(200).send({ message: 'User logged in Successfully' });
        }
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
}

export const signup = (req, res) => {

    const data = req.body;

    try {
        if (!data.email || !data.password) {
            res.status(400).send({ message: "Data not found" });
        } else {
            return res.status(200).send({ message: 'User registered in Successfully' });
        }
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }

}