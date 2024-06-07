import { useState } from "react";
export default function App() {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <>
          <div className="text-red-500">
              <h1>Hello World</h1>
          </div>
        </>
    );
}
