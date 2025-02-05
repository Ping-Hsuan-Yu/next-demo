This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Tab

基礎route結構

`useSelectedLayoutSegment()` 取得當前的 active segment

### Profile

多種layout routing

### Product

id 動態routing

### Dashboard

單一頁面分區fetch 個別狀態獨立控管

### formik

表單套件測試

```
import { object, string } from "yup";

const validationSchema = object({
  lastName: string().required("請填寫必填欄位"),
  firstName: string().required("請填寫必填欄位"),
  userId: string()
    .matches(/^[A-Z][0-9]{9}$/, "請輸入正確格式身分證字號")
    .required("請填寫必填欄位"),
  email: string().required("請填寫必填欄位").email("請輸入正確email格式"),
});

<Formik
    initialValues={{key: ""}}
    validationSchema={validationSchema}
    onSubmit={(values) => {
    console.log(values);
    // { key: "" }
    }}
>
```