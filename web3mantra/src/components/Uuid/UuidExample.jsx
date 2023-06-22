const UuidExample = ()=>{
    // const itemList = [
    //     { id: uuidv4(), name: 'Item 1' },
    //     { id: uuidv4(), name: 'Item 2' },
    //     { id: uuidv4(), name: 'Item 3' },
    //   ];

    const itemList =  [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
      ];
    return (
        <>
        {
            itemList.map(item => (
                <div key={Date.now()}>
                  {item.name}
                </div>
              ))
        }
        </>
    )

}
export default UuidExample;
