import DefaultLayout from "components/DefaultLayout";
import React, { FunctionComponent, useState } from "react";
import { Input, List, Typography } from 'antd';
import { useDebounce } from 'use-debounce';

interface ICategoryProps {
}

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const onSearch = (value: string) => console.log(value);

const Category: FunctionComponent<ICategoryProps> = (props) => {
  const [search, setSearch] = useState<string>("")
  const [debounceSearch] = useDebounce(search, 500)

  return (
    <DefaultLayout>
      <Input placeholder="input search text" size="large" onChange={(e: any) => setSearch(e?.target?.value)} />
      <List
        style={{ background: 'white', marginTop: 10 }}
        header={<div>검색내용: {debounceSearch}</div>}
        bordered
        dataSource={data.filter(v => v.toLowerCase().includes(debounceSearch.toLowerCase()))}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </DefaultLayout>
  );
};

export default Category;
