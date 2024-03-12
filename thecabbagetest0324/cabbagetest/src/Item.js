export default function Item({ item }) {
	// onChange={() => onToggleItem(item.id)}
	return (
		<li>
			<input type="checkbox" value={item.bought} />
			<span style={item.bought ? { textDecoration: 'line-through' } : {}}>
				{item.item}
			</span>
		</li>
	)
}
