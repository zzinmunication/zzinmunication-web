import DefaultLayout from "components/DefaultLayout";
import React, {
  FunctionComponent,
  useState,
  useEffect,
  useMemo
} from "react";
import { Input, List } from 'antd';
import { useDebounce } from 'use-debounce';
import { ListHover } from "./CategoryListStyles";

interface ICategoryProps {
}

const Category: FunctionComponent<ICategoryProps> = (props) => {
  const [search, setSearch] = useState<string>("")
  const [debounceSearch] = useDebounce(search, 500)
  const [data, setData] = useState({})

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(async () => {
    const response = await fetch('/zzinmunication_dataset.json')
    const data = await response.json()
    console.log('data', data)
    setData(data)
  }, [])

  const dataKeys = useMemo(() => Object.keys(data), [data])

  return (
    <DefaultLayout>
      <Input placeholder="input search text" size="large" onChange={(e: any) => setSearch(e?.target?.value)} />
      <ListHover>
        <List
          style={{ background: 'white', marginTop: 10 }}
          header={<div>검색내용: {debounceSearch}</div>}
          bordered
          dataSource={dataKeys.filter(v => v.toLowerCase().includes(debounceSearch.toLowerCase()))}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </ListHover>
    </DefaultLayout>
  );
};

export default Category;
