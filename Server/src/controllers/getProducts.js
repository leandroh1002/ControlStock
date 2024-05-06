const { Router } = require("express");
const { Products, People } = require("../db");
const router = Router();

const getProducts = async (req, res) => {
    try {
        const product = await Products.findAll({
            // include: People
        });

        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
    }
};

module.exports = getProducts;
