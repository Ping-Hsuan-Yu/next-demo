export default function DeviceDetail({ params }: { params: { name: string } }) {
  return <div>{params.name} Device Detail</div>;
}
