import { Link } from "react-router-dom";
import './style.css';

const PageNotFound = () => {
    return (
        <>
  <a
    href="https://codepen.io/ZonFire99/full/njdls/"
    className="viewFull"
    target="_parent"
  >
    View in full it looks way better :)
  </a>
  <div className="error">
    <div className="wrap">
      <div className={404}>
        <pre>
          <code>
            {"\n"}
            {"\t"} <span className="green">&lt;!</span>
            <span>EverHack</span>
            <span className="green">&gt;</span>
            {"\n"}
            <span className="orange">&lt;html&gt;</span>
            {"\n"}
            {"    "}
            <span className="orange">&lt;style&gt;</span>
            {"\n"}
            {"   "}* {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"        "}
            <span className="green">Trainual </span>&lt;&gt;
            <span className="blue"> Everlabs</span>;{"\n"}
            {"}"}
            {"\n"}
            {"     "}
            <span className="orange">&lt;/style&gt;</span>
            {"\n"} <span className="orange">&lt;body&gt;</span> {"\n"}
            {"              "}PAGE 404!{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}PAGE NOT FOUND!{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            <span className="comment">
              &lt;!--The page you are looking for, {"\n"}
              {"\t"}
              {"\t"}
              {"\t"}
              {"\t"}
              {"\t"}is not where you think it is.--&gt;{"\n"}
              {"\t"}
              {"\t"}
            </span>
            {"\n"} <span className="orange" /> {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"  "}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"      "}
          </code>
        </pre>
      </div>
      <code>
        <br />
        <span className="info">
          <br />
          <span className="orange">&nbsp;&lt;/body&gt;</span>
          <br />
          <span className="orange">&lt;/html&gt;</span>
        </span>
      </code>
    </div>
  </div>
</>

    );
}

export default PageNotFound
