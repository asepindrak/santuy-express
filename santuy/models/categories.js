
const CategoriesModel = {
    name: 'categories',
    icon: 'AiFillCaretRight',
    columns: [
        {
            name: 'id',
            title: 'ID',
            dataType: 'INT AUTO_INCREMENT PRIMARY KEY',
            inputType: 'number',
        },
        {
            name: 'name',
            title: 'Category Name',
            dataType: 'VARCHAR(50) NULL',
            inputType: 'text',
        },
    ],
}


module.exports = CategoriesModel
