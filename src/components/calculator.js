export default function calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator">
        <p className="result">0</p>
        <div className="buttons">
          <button type="button" className="btn number">
            AC
          </button>
          <button type="button" className="btn number">
            +/-
          </button>
          <button type="button" className="btn number">
            %
          </button>
          <button type="button" className="btn operations">
            /
          </button>

          <button type="button" className="btn number">
            7
          </button>
          <button type="button" className="btn number">
            8
          </button>
          <button type="button" className="btn number">
            9
          </button>
          <button type="button" className="btn operations">
            x
          </button>

          <button type="button" className="btn number">
            4
          </button>
          <button type="button" className="btn number">
            5
          </button>
          <button type="button" className="btn number">
            6
          </button>
          <button type="button" className="btn operations">
            -
          </button>

          <button type="button" className="btn number">
            1
          </button>
          <button type="button" className="btn number">
            2
          </button>
          <button type="button" className="btn number">
            3
          </button>
          <button type="button" className="btn operations">
            +
          </button>

          <button type="button" className="btn number zero">
            0
          </button>
          <button type="button" className="btn number">
            .
          </button>
          <button type="button" className="btn operations ">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
