import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

/* eslint-disable */
function RegisterForm({ values, setValues  }) {

    const handleChange = (event) => {
        setValues(prevData => ({
            ...prevData,
            [event?.target?.name]: event?.target?.value
        }))
    }


    return (
        <div className="grid sm:grid-cols-2 gap-6 py-8">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="team"
                >Team&apos;s Name</label>
                <input
                    type="text"
                    id="team"
                    name="team"
                    value={values.team}
                    onChange={handleChange}
                    required
                    placeholder="Enter the name of your group"
                    className="text-[0.88rem] bg-transparent outline-none border-[1px] px-4 py-[0.88rem] rounded-[6px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="phone"
                >Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="text-[0.88rem] bg-transparent outline-none border-[1px] px-4 py-[0.88rem] rounded-[6px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                >Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="text-[0.88rem] bg-transparent outline-none border-[1px] px-4 py-[0.88rem] rounded-[6px]"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="project"
                >Project Topic</label>
                <input
                    type="text"
                    id="project"
                    name="project"
                    value={values.project}
                    onChange={handleChange}
                    required
                    placeholder="What is your group project topic"
                    className="text-[0.88rem] bg-transparent outline-none border-[1px] px-4 py-[0.88rem] rounded-[6px]"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor='category'>Category</label>

                <Select
                    placeholder="Select your category"
                    indicator={<KeyboardArrowDown />}
                    name="category"
                    required
                    slotProps={{
                        button: {
                            id: 'category',
                            'aria-labelledby': 'select-label group-size',
                        },
                    }}
                    sx={{
                        width: "100%",
                        padding: "0.78rem 1rem",
                        color: "black",
                        fontWeight: "600",
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transition: 'rotate(-180deg)',
                            },
                        },
                        '& .MuiOption-root': {
                            backgroundColor: "transparent",
                        }
                    }}
                >
                    <Option value="Frontend Development">Frontend Development</Option>
                    <Option value="Backend Development">Backend Development</Option>
                    <Option value="Graphic Design">Graphic Design</Option>
                    <Option value="UX/UI Design">UX/UI Design</Option>
                </Select>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor='group-size'>Group Size</label>
                <Select
                    placeholder="Select"
                    indicator={<KeyboardArrowDown />}
                    name='size'
                    required
                    slotProps={{
                        button: {
                            id: 'group-size',
                            'aria-labelledby': 'select-label group-size',
                        }
                    }}
                    sx={{
                        width: "100%",
                        padding: "0.78rem 1rem",
                        color: "black",
                        fontWeight: "600",
                        [` & .JoySelect-root:hover`]: {
                            background: "#000"
                        },
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        }
                    }}
                >
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                </Select>
            </div>
        </div>
    );
}

export default RegisterForm
