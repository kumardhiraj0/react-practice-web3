const UuidExample = ()=>{
    const itemList = [
        { id: uuidv4(), name: 'Item 1' },
        { id: uuidv4(), name: 'Item 2' },
        { id: uuidv4(), name: 'Item 3' },
      ];
    return (
        <>
        {
            itemList.map(item => (
                <div key={item.id}>
                  {item.name}
                </div>
              ))
        }
        </>
    )

}
export default UuidExample;
