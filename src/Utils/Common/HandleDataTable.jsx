import { ButtonCSS } from '@/Components/Button';

export const handleDataTable = (
  data,
  { handleGetProfileItem, handleUpdateItem, handleDeleteItem }
) => {
  const { ShowProfile, Edit, Delete } = ButtonCSS;
  return data.map((item, index) => {
    return {
      ...item,
      action: (
        <div>
          {handleGetProfileItem ? (
            <ShowProfile
              onClick={() => {
                handleGetProfileItem(item._id);
              }}
            >
              Xem thông tin chi tiết
            </ShowProfile>
          ) : null}
          {handleUpdateItem ? (
            <Edit
              onClick={() => {
                handleUpdateItem(item._id);
              }}
            >
              Sửa
            </Edit>
          ) : null}
          {handleDeleteItem ? (
            <Delete
              onClick={() => {
                handleDeleteItem(item._id);
              }}
            >
              Xóa
            </Delete>
          ) : null}
        </div>
      ),
    };
  });
};
