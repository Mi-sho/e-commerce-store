import { useNavigate, useParams } from "react-router";
import styles from "./CreateEditItem.module.css";
import { useCreateItem, useEditItem, useOneItem } from "../../../api/itemApi";

export default function CreateEditItem({ tittle }) {
  const navigate = useNavigate();
  const { createItem } = useCreateItem();
  const { editItem } = useEditItem();
  const { itemId } = useParams();
  const { item } = itemId ? useOneItem(itemId) : { item: {} };

  const isEdit = tittle === "Edit";

  const createItemHandler = async (formData) => {
    const itemData = Object.fromEntries(formData);

    try{

        await createItem(itemData);
        navigate("/catalog");
    }catch(err){
        console.log(err.message);
        
    }

  };

  const editItemHandler = async (formData) => {
      const itemData = Object.fromEntries(formData);

      try{

          await editItem(itemId,itemData);
          navigate(`/catalog/${itemId}/details`)
      }catch(err) {
        console.log(err.message);
        
      }


  };
  return (
    <>
      <div className={styles["create-edit-container"]}>
        <div className={styles["create-heading"]}>
          <h2 className="create-edit-heading">{tittle} item</h2>
        </div>

        <div className={styles["create-edit-form-wrapper"]}>
          <form
            action={isEdit ? editItemHandler : createItemHandler}
            className={styles["create-edit-form"]}
          >
            <div className={styles["item-tittle"]}>
              <label htmlFor="tittle">Tittle</label>
              <input type="text" id="tittle" name="tittle" defaultValue={item.tittle || ''} required />
            </div>

            <div className={styles["item-summary"]}>
              <label htmlFor="item-summary">Summary</label>
              <input type="text" id="item-summary" name="item-summary" defaultValue={item["item-summary"] || ''} required />
            </div>

            <div className={styles["item-image"]}>
              <label htmlFor="item-image">Image</label>
              <input type="text" id="item-image" name="item-image" defaultValue={item["item-image"] || ''} required/>
            </div>

            <div className={styles["item-category"]}>
              <label htmlFor="item-category">Category</label>
              <select type="text" id="item-category" name="item-category" defaultChecked={item["item-category"] || ''} required>
                <option value="">Choose category</option>
                <option value="Paintings">Paintings</option>
                <option value="Furnitures">Furnitures</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Sculptures">Sculptures</option>
                <option value="Prints">Prints</option>
                <option value="Watches">Watches</option>
              </select>
            </div>

            <div className={styles["item-condition"]}>
              <label htmlFor="item-condition">Condition</label>
              <input type="text" id="item-condition" name="item-condition" defaultValue={item["item-condition"] || ''} required/>
            </div>

            <div className={styles["item-maker"]}>
              <label htmlFor="item-maker">Maker</label>
              <input type="text" id="item-maker" name="item-maker" defaultValue={item["item-maker"] || ''} required/>
            </div>

            <div className={styles["item-description"]}>
              <label htmlFor="item-description">Description</label>
              <textarea
                type="text"
                id="item-description"
                name="item-description"
                defaultValue={item["item-description"] || ''}
                required
              />
            </div>

            <div className={styles["item-price"]}>
              <label htmlFor="itemPrice">Price</label>
              <input type="number" id="itemPrice" name="itemPrice"  defaultValue={item.itemPrice || ''} required/>
            </div>

            <button type="submit" className={styles["create-edit-sbm-btn"]}>
              {tittle} item
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
