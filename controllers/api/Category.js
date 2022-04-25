const { Category, Product } = require("../../database/models");
const { Op } = require("sequelize");

module.exports = {
	show: async (req, res) => {
		const authTokens = ["123abc", "456xyz"];
		
		const isToken = req.query.token;

		let category;

		if (isToken) {
			if (authTokens.includes(req.query.token)) {
				category = await Category.findAll({ 
					include: ["product"]
				});
			} else {
				return res.status(404).json({ 
					error: "Invalid token",
					message: "Please provide a valid token"
				})
			}
		} else {
			category = await Category.findAll({
				attributes: ["title"]
			});
		}

		return res.json({
			total: category.length,
			category: category
		})
	},

	store: async (req, res) => {
		const categoryStored = await Category.create(req.body);
		return res.status(200).json(categoryStored);
	},
	
	detail: async (req, res) => {
		const category = await Category.findByPk(req.params.id, {
			include: ["product"]
		});

		return res.status(200).json(category);
	},
	
	delete: async (req, res) => {
		const categoryDelete = await Category.findByPk(
			req.params.id,
			{
				include: ["Size", "Color"]
			}
		);

		categoryDelete.removeSize(categoryDelete.size);

		const categoryDestroy = categoryDelete.destroy();

		return res.json(categoryDestroy);

	},

	search: async (req, res) => {
		return res.render("search");
	},

	searchResults: async (req, res) => {
		// http://localhost:3000/api/movies/search?title=ar&genre=fi
		const title = req.query.title;
		const product = req.query.product;
		const category = await Category.findAll({
			include: {
				model: Product,
				as: "product",
				where: {
					name: { 
						[Op.like]: `%${product}%`	
					}
				}
			},
			where: {
				title: {
					[Op.like]: `%${title}%`
				} 
			},
		});
		return res.json(category);
	}
};
