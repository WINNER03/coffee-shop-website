def simulate_jeepney(arrivals, capacity=8):
    """Board arriving passenger groups until the jeepney reaches capacity."""
    if capacity <= 0:
        raise ValueError("capacity must be positive")

    current_passengers = 0
    print(f"Starting simulation with arrivals: {arrivals}")
    print("_" * 40)

    for group_index, group_size in enumerate(arrivals, start=1):
        if group_size < 0:
            raise ValueError("group sizes cannot be negative")
        if current_passengers >= capacity:
            break
        current_passengers += group_size
        print(
            f"Boarded group {group_index} ({group_size} passengers). "
            f"Total passengers: {current_passengers}"
        )
        print("_" * 40)

    if current_passengers == capacity:
        print(f"Status: FULL - exactly {capacity} passengers")
    elif current_passengers > capacity:
        print(f"Status: OVERBOOKED - more than {capacity} passengers")
    else:
        print(
            "Status: DISPATCHED UNDER CAPACITY - fewer passengers "
            "because there are no more arrivals"
        )
    print("\n" + "=" * 40 + "\n")


if __name__ == "__main__":
    test_list_1 = [2, 1, 3, 2, 1, 4]
    simulate_jeepney(test_list_1)

    test_list_2 = [3, 1, 2]
    simulate_jeepney(test_list_2)