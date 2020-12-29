const inputs1 = [
	{
        name: "Provided units",
        key:"prov_units",
        value: 6,
        max: 50,
        min: 1,
        step: 1,
        type:"slider"
	},
	{
        name: "PHP",
        key:"php",
        value: 1000,
        max: 5000,
        min: 0,
        step: 1,
        type:"slider"
	},
	{
        name: "PK30min",
        key:"pf30min",
        value: 0.75,
        max: 1.0,
        min: 0.5,
        step: 0.01,
        type:"slider"
	},
	{
        name: "PT",
        key:"pt",
        value: 15,
        max: 30,
        min: 8,
        step: 1,
        type:"slider"
	},
	{
        name: "MQT",
        key:"mqt",
        value: 5,
        max: 10,
        min: 0,
        step: 1,
        type:"slider"
	},
	{
        name: "SP",
        key:"sp",
        value: 1.5,
        max: 5.0,
        min: 0.5,
        step: 0.1,
        type:"slider"
    },
    {
        name: "X Spacing",
        key:"x_spacing",
        value: 6,
        max: 15,
        min: 5,
        step: 1,
        type:"slider"
    },
    {
        name: "Y Spacing",
        key:"y_spacing",
        value: 0,
        max: 15,
        min: 5,
        step: 1,
        type:"slider"
    },
    {
        name: "Z Spacing",
        key:"z_spacing",
        value: 0,
        max: 15,
        min: 5,
        step: 1,
        type:"slider"
    },
    {
        name: "Security Lanes Offset",
        key:"sec_layout_offset",
        value: false,
        type:"button"
    },
    {
        name: "Shared Body Scanner",
        key:"shared_body_scanner",
        value: false,
        type:"button"
    },
    {
        name: "Security Lanes Order",
        key:"security_lanes_order",
        value: true,
        type:"button"
    }

]

export default inputs1


/*     {
		name: "Baggage Conveyor Width",
        value: "2",
        max: "5",
        min: "2",
        step: "1",
        type:"slider"
    },
    {
		name: "Baggage Conveyor Length",
        value: "18",
        max: "20",
        min: "10",
        step: "1",
        type:"slider"
	}, */