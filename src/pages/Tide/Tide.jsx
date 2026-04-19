import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Col, Row, Button, Card, Select, DatePicker } from "antd";
import dayjs from "dayjs";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import useWeather from "../../app/hook/useWeather";
import { transformTideData } from "../../utils/transformTide"
import useCountry from "../../app/hook/useCountry";
import { dateFormat } from "./Constants";

const Tide = () => {
    const [params, setParams] = useState(null);

    const onSearch = (data) => {
        console.log(data)
        setParams({
            q: data?.place,
            date: data?.date.format("YYYY-MM-DD"),
        });
    };

    const { data: countryData = [], isLoading: countryDataLoading } = useCountry({ "country": "Vietnam" })

    const { data, isLoading } = useWeather(params);
    const tideData = data ? transformTideData(data) : null;

    return (
        <div>
            <Form
                onFinish={(value) => onSearch(value)}
                initialValues={{
                    date: dayjs(),
                }}
            >
                <Card>
                    <Row gutter={[10, 10]} className={"w-full"}>
                        <Col xs={24} md={6}>
                            <Form.Item
                                label="Địa điểm"
                                name="place"
                                rules={[{ required: true, message: 'Vui long điền địa điểm!' }]}
                            >
                                <Select
                                    showSearch={{
                                        optionFilterProp: 'label',
                                        filterSort: (optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
                                    }}
                                    placeholder="Chọn một địa điểm"
                                    options={countryData}
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={6}>
                            <Form.Item
                                label="Ngày"
                                name="date"
                                rules={[{ required: true, message: 'Vui long chọn ngày!' }]}
                            >
                                <DatePicker format={dateFormat}  style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={6}>
                            <Button type="primary" htmlType="submit">Tra cứu</Button>
                        </Col>
                    </Row>
                </Card>
            </Form>

            {tideData && tideData.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={tideData}>
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#0284c7"
                            fill="#7dd3fc"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            ) : (
                <div>Không có dữ liệu để hiển thị</div>
            )}

        </div>
    )
}

export default Tide