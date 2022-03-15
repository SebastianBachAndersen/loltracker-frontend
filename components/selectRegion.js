export default function selectRegion({ children }) {
  return (
    <select className="bg-primary rounded-lg h-10 text-xl ml-0.5">
      <option value="br" >br</option>
      <option value="eune">eune</option>
      <option value="lan">lan</option>
      <option value="las">las</option>
      <option value="na">na</option>
      <option value="oce">oce</option>
      <option value="ru">ru</option>
      <option value="tr">tr</option>
      <option value="jp">jp</option>
    </select>
  );
}
