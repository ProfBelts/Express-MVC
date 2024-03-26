// feedbackController.js

const index = (req, res) => {
    const courses = ["Web Fundamentals", "PHP Track", "Javascript Track"];

    res.render("feedback/index", { courses: courses });
};

const results = (req, res) => {
    const form_data = req.body;

    if (form_data) {
        res.render("feedback/results", form_data);
    } else {
        res.redirect("/");
    }
};

module.exports = { index, results };
