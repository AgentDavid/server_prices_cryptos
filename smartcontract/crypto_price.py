from pyteal import *


def approval_program():
    on_creation = Seq([
        App.globalPut(Bytes("Creator"), Txn.sender()),
        Assert(Txn.application_args.length() == Int(0)),
        Approve()
    ])

    update_slot_1 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("BTC"), Txn.application_args[1]),
        App.globalPut(Bytes("ETH"), Txn.application_args[2]),
        App.globalPut(Bytes("BNB"), Txn.application_args[3]),
        App.globalPut(Bytes("SOL"), Txn.application_args[4]),
        App.globalPut(Bytes("ADA"), Txn.application_args[5]),
        App.globalPut(Bytes("XRP"), Txn.application_args[6]),
        App.globalPut(Bytes("LUNA"), Txn.application_args[7]),
        App.globalPut(Bytes("DOT"), Txn.application_args[8]),
        App.globalPut(Bytes("AVAX"), Txn.application_args[9]),
        App.globalPut(Bytes("DOGE"), Txn.application_args[10]),
        App.globalPut(Bytes("SHIB"), Txn.application_args[11]),
        App.globalPut(Bytes("MATIC"), Txn.application_args[12]),
        App.globalPut(Bytes("CRO"), Txn.application_args[13]),
        App.globalPut(Bytes("WBTC"), Txn.application_args[14]),
        App.globalPut(Bytes("UNI"), Txn.application_args[15]),
        Approve()
    ])

    update_slot_2 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("LTC"), Txn.application_args[1]),
        App.globalPut(Bytes("LINK"), Txn.application_args[2]),
        App.globalPut(Bytes("ALGO"), Txn.application_args[3]),
        App.globalPut(Bytes("BCH"), Txn.application_args[4]),
        App.globalPut(Bytes("NEAR"), Txn.application_args[5]),
        App.globalPut(Bytes("TRX"), Txn.application_args[6]),
        App.globalPut(Bytes("XML"), Txn.application_args[7]),
        App.globalPut(Bytes("MANA"), Txn.application_args[8]),
        App.globalPut(Bytes("AXS"), Txn.application_args[9]),
        App.globalPut(Bytes("ATOM"), Txn.application_args[10]),
        App.globalPut(Bytes("VET"), Txn.application_args[11]),
        App.globalPut(Bytes("FTT"), Txn.application_args[12]),
        App.globalPut(Bytes("FTM"), Txn.application_args[13]),
        App.globalPut(Bytes("SAND"), Txn.application_args[14]),
        App.globalPut(Bytes("FIL"), Txn.application_args[15]),
        Approve()
    ])

    update_slot_3 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("HBAR"), Txn.application_args[1]),
        App.globalPut(Bytes("BTCB"), Txn.application_args[2]),
        App.globalPut(Bytes("THETA"), Txn.application_args[3]),
        App.globalPut(Bytes("EGLD"), Txn.application_args[4]),
        App.globalPut(Bytes("ICP"), Txn.application_args[5]),
        App.globalPut(Bytes("ETC"), Txn.application_args[6]),
        App.globalPut(Bytes("MIOTA"), Txn.application_args[7]),
        App.globalPut(Bytes("XTZ"), Txn.application_args[8]),
        App.globalPut(Bytes("HNT"), Txn.application_args[9]),
        App.globalPut(Bytes("XMR"), Txn.application_args[10]),
        App.globalPut(Bytes("AAVE"), Txn.application_args[11]),
        App.globalPut(Bytes("LEO"), Txn.application_args[12]),
        App.globalPut(Bytes("KLAY"), Txn.application_args[13]),
        App.globalPut(Bytes("GALA"), Txn.application_args[14]),
        App.globalPut(Bytes("GRT"), Txn.application_args[15]),
        Approve()
    ])

    update_slot_4 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("EOS"), Txn.application_args[1]),
        App.globalPut(Bytes("CAKE"), Txn.application_args[2]),
        App.globalPut(Bytes("STX"), Txn.application_args[3]),
        App.globalPut(Bytes("FLOW"), Txn.application_args[4]),
        App.globalPut(Bytes("LRC"), Txn.application_args[5]),
        App.globalPut(Bytes("ONE"), Txn.application_args[6]),
        App.globalPut(Bytes("BTT"), Txn.application_args[7]),
        App.globalPut(Bytes("KSM"), Txn.application_args[8]),
        App.globalPut(Bytes("MKR"), Txn.application_args[9]),
        App.globalPut(Bytes("ENJ"), Txn.application_args[10]),
        App.globalPut(Bytes("BSV"), Txn.application_args[11]),
        App.globalPut(Bytes("QNT"), Txn.application_args[12]),
        App.globalPut(Bytes("AMP"), Txn.application_args[13]),
        App.globalPut(Bytes("KDA"), Txn.application_args[14]),
        App.globalPut(Bytes("XEC"), Txn.application_args[15]),
        Approve()
    ])

    only_admin = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Approve()
    ])

    program = Cond(
        [Txn.application_id() == Int(0), on_creation],
        [Txn.on_completion() == OnComplete.OptIn, only_admin],
        [Txn.on_completion() == OnComplete.UpdateApplication, only_admin],
        [Txn.on_completion() == OnComplete.DeleteApplication, only_admin],
        [Txn.on_completion() == OnComplete.ClearState, only_admin],
        [Txn.application_args[0] == Bytes("update_slot_1"), update_slot_1],
        [Txn.application_args[0] == Bytes("update_slot_2"), update_slot_2],
        [Txn.application_args[0] == Bytes("update_slot_3"), update_slot_3],
        [Txn.application_args[0] == Bytes("update_slot_4"), update_slot_4],
    )

    return program


def clear_state_program():
    return Int(0)
