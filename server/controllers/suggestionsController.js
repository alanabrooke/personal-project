
async function getSuggestions(req, res) {
    // console.log("getSuggestions in suggestionsCont")
    const db = req.app.get('db')
    const suggestions = await db.getSuggestions();
    
    res.status(200).json(suggestions)
}
module.exports = {
    getSuggestions
}




// const getSuggestions = (req, res) => {
//     console.log("getSuggestions in suggestionsCont")
//     const db = req.app.get('db')
//     db.getSuggestions().then(suggestions => {
//         console.log("suggestions pulled", suggestions)
//         res.status(200).json(suggestions)
//     })
// }
// module.exports = {
//     getSuggestions
// }