const Book = require('../models/bookModel');

module.exports = {
  async index(req, res) {
    try {
      const allBooks = await Book.find({});
      if (allBooks.length === 0) {
        return await res
          .status(404)
          .json({ error: 'Nenhum livro cadastrado.' });
      } else {
        await res.status(200).json(allBooks);
      }
    } catch (e) {
      res.json(e);
    }
  },
  async create(req, res) {
    const { title, publisher, picture, authors } = req.body;

    if (!title || !publisher || !picture || !authors) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha todos os dados.' });
    }

    try {
      const newBook = new Book(req.body);
      newBook.save();
      res.status(200).json({
        success: 'Livro cadastrado com sucesso.',
      });
    } catch (e) {
      res.json({
        errors: 'Houve um erro ao tentar cadastrar. Tente novamente.',
      });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      id = req.body.id;
    }

    try {
      await Book.findByIdAndDelete(id);
      res.status(200).json({
        success: 'Livro deletado com sucesso.',
      });
    } catch (e) {
      res.json({
        errors:
          'Houve um erro ao tentar deletar. Verifique o ID e tente novamente.',
      });
    }
  },
  async update(req, res) {
    const { title, publisher, picture, authors } = req.body;
    const newBookInfo = {
      title: title,
      publisher: publisher,
      picture: picture,
      authors: authors,
    };

    const { id } = req.params;

    if (!title || !publisher || !picture || !authors) {
      res.status(400).json({ error: 'Por favor, insira todos os campos.' });
    } else {
      try {
        await Book.findByIdAndUpdate(id, newBookInfo);
        res.status(200).json({ success: 'Livro editado com sucesso.' });
      } catch (error) {
        res.json({
          errors: 'Houve um erro ao tentar editar.',
        });
      }
    }
  },
};
