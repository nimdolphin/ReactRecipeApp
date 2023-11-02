import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt="card-img" />
      </div>

      <div className="card-content">
        <span className="card-title">{strCategory}</span>

        <p>{strCategoryDescription.slice(0, 130)}...</p>
      </div>
      <div className="card-action">
        <Link
          to={`/category/${strCategory}`}
          className="btn #1b5e20 green darken-4"
        >
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
