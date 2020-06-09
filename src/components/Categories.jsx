import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:7777/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => console.log("request error", err));
    }, []);

    return (
        <div style={containerStyle}>
            {categories.map((category, idx) => {
                return (
                    <Link
                        key={idx}
                        style={childStyle}
                        to={{
                            pathname: `/categories/${category.id}`,
                            state: {
                                categoryName: category.name
                            }
                        }}
                    >
                        {category.name}
                    </Link>
                );
            })}
        </div>
    );
}

const containerStyle = {
    display: "flex",
    flexFlow: "row wrap",
};

const childStyle = {
    flex: "1 1 50%",
};

export default Categories;
