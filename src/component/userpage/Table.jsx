

const Table = ({ data }) => {

    return (
      <table>
        <tbody>
          <tr>
            <th></th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <div className="BoldLink" href="#" >{item.login}</div>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;