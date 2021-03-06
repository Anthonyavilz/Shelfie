// let inventory = [];
module.exports = {
    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.get_Inventory()
          .then(products => res.status(200).send(products))
          .catch(err => {
            console.log(err)
            res.status(500).send(err);
          });
      },
    
    
    createProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { imageURL, productName, price } = req.body;
    
        dbInstance.create_product([imageURL, productName, price])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      },
    
    // editProduct = (req, res, next) => {
    //     const dbInstance = req.app.get('db');
    //     const { params, query } = req;
    
    //     dbInstance.edit_product([params.id, query.desc])
    //       .then(() => res.sendStatus(200))
    //       .catch(err => {
    //         res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
    //         console.log(err)
    //       });
    //   },
    
    // getInventory: (req, res, next) => {
    //     res.status(200).send("hello")

    // }
    
}

