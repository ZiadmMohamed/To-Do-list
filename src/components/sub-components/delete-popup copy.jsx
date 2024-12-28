import { Button } from "@mui/material";

function DeletePopup() {
  return (
    <div className="backdrop">
      <div className="edit-popup" style={{textAlign:"right"}}>
        <h2>
          {" "}
          هل انت متئكد من رغبتك في حذف المهمة ؟
        </h2>

        <p style={{color:"gray"}}>لا يمكن التراجع عن الحذف في حال اختيار زر :(حذف)</p>

        <div style={{ display: "flex" }}>
          <Button color="secondary" variant="text">
            تعديل
          </Button>
          <Button color="secondary" variant="text">
            الغاء
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
