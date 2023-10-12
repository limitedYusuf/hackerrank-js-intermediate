module.exports = (req, res, next) => {
   const { page = 1, limit = 3, q = '' } = req.query;

   console.log("query", q);
   req.context = {
      page: +page,
      limit: +limit,
      skip: (page - 1) * limit,
      searchTerm: q,
      search: new RegExp(q, "gi")
   };
   next();
};