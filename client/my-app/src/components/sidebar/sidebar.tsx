import { useState } from 'react';
import Modal from './../modal./modal';
function Sidebar() {
  const [modal, setModal] = useState(false);
  function printMe(e: any) {
    e.preventDefault();
    console.log('buttonpressed');
  }
  const toggle = function () {
    setModal(!modal);
  };
  const createDiary = () => {};
  return (
    <div>
      <button onClick={toggle}>CREATE NEW DIARY</button>
      {modal ? (
        <Modal>
          <div>
            <span>CHOOOSE NAME FOR YOUR DIARY</span>
            <form onSubmit={printMe}>
              <label>
                NAME YOUR DIARY
                <input type="text" />
              </label>
              <button type="submit" value="Submit" onChange={printMe}>
                Create new Diary
              </button>
              <button onClick={toggle}> CLOSE</button>
            </form>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
export default Sidebar;
